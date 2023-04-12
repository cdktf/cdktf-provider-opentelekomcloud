# `dataOpentelekomcloudRtsStackResourceV1` Submodule <a name="`dataOpentelekomcloudRtsStackResourceV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRtsStackResourceV1 <a name="DataOpentelekomcloudRtsStackResourceV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1 opentelekomcloud_rts_stack_resource_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrtsstackresourcev1"

dataopentelekomcloudrtsstackresourcev1.NewDataOpentelekomcloudRtsStackResourceV1(scope Construct, id *string, config DataOpentelekomcloudRtsStackResourceV1Config) DataOpentelekomcloudRtsStackResourceV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config">DataOpentelekomcloudRtsStackResourceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config">DataOpentelekomcloudRtsStackResourceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetPhysicalResourceId">ResetPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetId"></a>

```go
func ResetId()
```

##### `ResetPhysicalResourceId` <a name="ResetPhysicalResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetPhysicalResourceId"></a>

```go
func ResetPhysicalResourceId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceName"></a>

```go
func ResetResourceName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceType"></a>

```go
func ResetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrtsstackresourcev1"

dataopentelekomcloudrtsstackresourcev1.DataOpentelekomcloudRtsStackResourceV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrtsstackresourcev1"

dataopentelekomcloudrtsstackresourcev1.DataOpentelekomcloudRtsStackResourceV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrtsstackresourcev1"

dataopentelekomcloudrtsstackresourcev1.DataOpentelekomcloudRtsStackResourceV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.logicalResourceId">LogicalResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.requiredBy">RequiredBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatus">ResourceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatusReason">ResourceStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceIdInput">PhysicalResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackNameInput">StackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceId">PhysicalResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackName">StackName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `LogicalResourceId`<sup>Required</sup> <a name="LogicalResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.logicalResourceId"></a>

```go
func LogicalResourceId() *string
```

- *Type:* *string

---

##### `RequiredBy`<sup>Required</sup> <a name="RequiredBy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.requiredBy"></a>

```go
func RequiredBy() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceStatus`<sup>Required</sup> <a name="ResourceStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatus"></a>

```go
func ResourceStatus() *string
```

- *Type:* *string

---

##### `ResourceStatusReason`<sup>Required</sup> <a name="ResourceStatusReason" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatusReason"></a>

```go
func ResourceStatusReason() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PhysicalResourceIdInput`<sup>Optional</sup> <a name="PhysicalResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceIdInput"></a>

```go
func PhysicalResourceIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `StackNameInput`<sup>Optional</sup> <a name="StackNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackNameInput"></a>

```go
func StackNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PhysicalResourceId`<sup>Required</sup> <a name="PhysicalResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceId"></a>

```go
func PhysicalResourceId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackName"></a>

```go
func StackName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRtsStackResourceV1Config <a name="DataOpentelekomcloudRtsStackResourceV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudrtsstackresourcev1"

&dataopentelekomcloudrtsstackresourcev1.DataOpentelekomcloudRtsStackResourceV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StackName: *string,
	Id: *string,
	PhysicalResourceId: *string,
	Region: *string,
	ResourceName: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.stackName">StackName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.physicalResourceId">PhysicalResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceName">ResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.stackName"></a>

```go
StackName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PhysicalResourceId`<sup>Optional</sup> <a name="PhysicalResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.physicalResourceId"></a>

```go
PhysicalResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}.

---



