# `dataOpentelekomcloudDwsFlavorsV2` Submodule <a name="`dataOpentelekomcloudDwsFlavorsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDwsFlavorsV2 <a name="DataOpentelekomcloudDwsFlavorsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2 opentelekomcloud_dws_flavors_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddwsflavorsv2"

dataopentelekomclouddwsflavorsv2.NewDataOpentelekomcloudDwsFlavorsV2(scope Construct, id *string, config DataOpentelekomcloudDwsFlavorsV2Config) DataOpentelekomcloudDwsFlavorsV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config">DataOpentelekomcloudDwsFlavorsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config">DataOpentelekomcloudDwsFlavorsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetVcpus">ResetVcpus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetId"></a>

```go
func ResetId()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetVcpus` <a name="ResetVcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.resetVcpus"></a>

```go
func ResetVcpus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddwsflavorsv2"

dataopentelekomclouddwsflavorsv2.DataOpentelekomcloudDwsFlavorsV2_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddwsflavorsv2"

dataopentelekomclouddwsflavorsv2.DataOpentelekomcloudDwsFlavorsV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddwsflavorsv2"

dataopentelekomclouddwsflavorsv2.DataOpentelekomcloudDwsFlavorsV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.flavors">Flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList">DataOpentelekomcloudDwsFlavorsV2FlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.vcpusInput">VcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.vcpus">Vcpus</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Flavors`<sup>Required</sup> <a name="Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.flavors"></a>

```go
func Flavors() DataOpentelekomcloudDwsFlavorsV2FlavorsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList">DataOpentelekomcloudDwsFlavorsV2FlavorsList</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VcpusInput`<sup>Optional</sup> <a name="VcpusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.vcpusInput"></a>

```go
func VcpusInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.vcpus"></a>

```go
func Vcpus() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDwsFlavorsV2Config <a name="DataOpentelekomcloudDwsFlavorsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddwsflavorsv2"

&dataopentelekomclouddwsflavorsv2.DataOpentelekomcloudDwsFlavorsV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZone: *string,
	Id: *string,
	Memory: *f64,
	Region: *string,
	Vcpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#availability_zone DataOpentelekomcloudDwsFlavorsV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#id DataOpentelekomcloudDwsFlavorsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.memory">Memory</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#memory DataOpentelekomcloudDwsFlavorsV2#memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#region DataOpentelekomcloudDwsFlavorsV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.vcpus">Vcpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#vcpus DataOpentelekomcloudDwsFlavorsV2#vcpus}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#availability_zone DataOpentelekomcloudDwsFlavorsV2#availability_zone}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#id DataOpentelekomcloudDwsFlavorsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#memory DataOpentelekomcloudDwsFlavorsV2#memory}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#region DataOpentelekomcloudDwsFlavorsV2#region}.

---

##### `Vcpus`<sup>Optional</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Config.property.vcpus"></a>

```go
Vcpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dws_flavors_v2#vcpus DataOpentelekomcloudDwsFlavorsV2#vcpus}.

---

### DataOpentelekomcloudDwsFlavorsV2Flavors <a name="DataOpentelekomcloudDwsFlavorsV2Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Flavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Flavors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddwsflavorsv2"

&dataopentelekomclouddwsflavorsv2.DataOpentelekomcloudDwsFlavorsV2Flavors {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDwsFlavorsV2FlavorsList <a name="DataOpentelekomcloudDwsFlavorsV2FlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddwsflavorsv2"

dataopentelekomclouddwsflavorsv2.NewDataOpentelekomcloudDwsFlavorsV2FlavorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudDwsFlavorsV2FlavorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference <a name="DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddwsflavorsv2"

dataopentelekomclouddwsflavorsv2.NewDataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.flavorId">FlavorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.vcpus">Vcpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.volumetype">Volumetype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Flavors">DataOpentelekomcloudDwsFlavorsV2Flavors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.flavorId"></a>

```go
func FlavorId() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.vcpus"></a>

```go
func Vcpus() *f64
```

- *Type:* *f64

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.volumetype"></a>

```go
func Volumetype() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2FlavorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudDwsFlavorsV2Flavors
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDwsFlavorsV2.DataOpentelekomcloudDwsFlavorsV2Flavors">DataOpentelekomcloudDwsFlavorsV2Flavors</a>

---



