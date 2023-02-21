# `dataOpentelekomcloudRdsFlavorsV3` Submodule <a name="`dataOpentelekomcloudRdsFlavorsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRdsFlavorsV3 <a name="DataOpentelekomcloudRdsFlavorsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3 opentelekomcloud_rds_flavors_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrdsflavorsv3"

dataopentelekomcloudrdsflavorsv3.NewDataOpentelekomcloudRdsFlavorsV3(scope Construct, id *string, config DataOpentelekomcloudRdsFlavorsV3Config) DataOpentelekomcloudRdsFlavorsV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config">DataOpentelekomcloudRdsFlavorsV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config">DataOpentelekomcloudRdsFlavorsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrdsflavorsv3"

dataopentelekomcloudrdsflavorsv3.DataOpentelekomcloudRdsFlavorsV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrdsflavorsv3"

dataopentelekomcloudrdsflavorsv3.DataOpentelekomcloudRdsFlavorsV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrdsflavorsv3"

dataopentelekomcloudrdsflavorsv3.DataOpentelekomcloudRdsFlavorsV3_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.flavors">Flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList">DataOpentelekomcloudRdsFlavorsV3FlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbTypeInput">DbTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbVersionInput">DbVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.instanceModeInput">InstanceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbType">DbType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.instanceMode">InstanceMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Flavors`<sup>Required</sup> <a name="Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.flavors"></a>

```go
func Flavors() DataOpentelekomcloudRdsFlavorsV3FlavorsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList">DataOpentelekomcloudRdsFlavorsV3FlavorsList</a>

---

##### `DbTypeInput`<sup>Optional</sup> <a name="DbTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbTypeInput"></a>

```go
func DbTypeInput() *string
```

- *Type:* *string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbVersionInput"></a>

```go
func DbVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceModeInput`<sup>Optional</sup> <a name="InstanceModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.instanceModeInput"></a>

```go
func InstanceModeInput() *string
```

- *Type:* *string

---

##### `DbType`<sup>Required</sup> <a name="DbType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbType"></a>

```go
func DbType() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceMode`<sup>Required</sup> <a name="InstanceMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.instanceMode"></a>

```go
func InstanceMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRdsFlavorsV3Config <a name="DataOpentelekomcloudRdsFlavorsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrdsflavorsv3"

&dataopentelekomcloudrdsflavorsv3.DataOpentelekomcloudRdsFlavorsV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DbType: *string,
	DbVersion: *string,
	InstanceMode: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dbType">DbType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#db_type DataOpentelekomcloudRdsFlavorsV3#db_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dbVersion">DbVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#db_version DataOpentelekomcloudRdsFlavorsV3#db_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.instanceMode">InstanceMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#instance_mode DataOpentelekomcloudRdsFlavorsV3#instance_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#id DataOpentelekomcloudRdsFlavorsV3#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbType`<sup>Required</sup> <a name="DbType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dbType"></a>

```go
DbType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#db_type DataOpentelekomcloudRdsFlavorsV3#db_type}.

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.dbVersion"></a>

```go
DbVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#db_version DataOpentelekomcloudRdsFlavorsV3#db_version}.

---

##### `InstanceMode`<sup>Required</sup> <a name="InstanceMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.instanceMode"></a>

```go
InstanceMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#instance_mode DataOpentelekomcloudRdsFlavorsV3#instance_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#id DataOpentelekomcloudRdsFlavorsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudRdsFlavorsV3Flavors <a name="DataOpentelekomcloudRdsFlavorsV3Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Flavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Flavors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrdsflavorsv3"

&dataopentelekomcloudrdsflavorsv3.DataOpentelekomcloudRdsFlavorsV3Flavors {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRdsFlavorsV3FlavorsList <a name="DataOpentelekomcloudRdsFlavorsV3FlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrdsflavorsv3"

dataopentelekomcloudrdsflavorsv3.NewDataOpentelekomcloudRdsFlavorsV3FlavorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudRdsFlavorsV3FlavorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference <a name="DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrdsflavorsv3"

dataopentelekomcloudrdsflavorsv3.NewDataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.azStatus">AzStatus</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.vcpus">Vcpus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Flavors">DataOpentelekomcloudRdsFlavorsV3Flavors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzStatus`<sup>Required</sup> <a name="AzStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.azStatus"></a>

```go
func AzStatus() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.vcpus"></a>

```go
func Vcpus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3FlavorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudRdsFlavorsV3Flavors
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRdsFlavorsV3.DataOpentelekomcloudRdsFlavorsV3Flavors">DataOpentelekomcloudRdsFlavorsV3Flavors</a>

---



