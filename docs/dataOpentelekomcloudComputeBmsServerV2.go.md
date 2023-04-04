# `dataOpentelekomcloudComputeBmsServerV2` Submodule <a name="`dataOpentelekomcloudComputeBmsServerV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeBmsServerV2 <a name="DataOpentelekomcloudComputeBmsServerV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2 opentelekomcloud_compute_bms_server_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

dataopentelekomcloudcomputebmsserverv2.NewDataOpentelekomcloudComputeBmsServerV2(scope Construct, id *string, config DataOpentelekomcloudComputeBmsServerV2Config) DataOpentelekomcloudComputeBmsServerV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config">DataOpentelekomcloudComputeBmsServerV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config">DataOpentelekomcloudComputeBmsServerV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetFlavorId">ResetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetHostStatus">ResetHostStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFlavorId` <a name="ResetFlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetFlavorId"></a>

```go
func ResetFlavorId()
```

##### `ResetHostStatus` <a name="ResetHostStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetHostStatus"></a>

```go
func ResetHostStatus()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

dataopentelekomcloudcomputebmsserverv2.DataOpentelekomcloudComputeBmsServerV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

dataopentelekomcloudcomputebmsserverv2.DataOpentelekomcloudComputeBmsServerV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

dataopentelekomcloudcomputebmsserverv2.DataOpentelekomcloudComputeBmsServerV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV4">AccessIpV4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV6">AccessIpV6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.configDrive">ConfigDrive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hypervisorHostname">HypervisorHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.kernelId">KernelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.locked">Locked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.network">Network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList">DataOpentelekomcloudComputeBmsServerV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.progress">Progress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.securityGroups">SecurityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList">DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatusInput">HostStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorId">FlavorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatus">HostStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessIpV4`<sup>Required</sup> <a name="AccessIpV4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV4"></a>

```go
func AccessIpV4() *string
```

- *Type:* *string

---

##### `AccessIpV6`<sup>Required</sup> <a name="AccessIpV6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.accessIpV6"></a>

```go
func AccessIpV6() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `ConfigDrive`<sup>Required</sup> <a name="ConfigDrive" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.configDrive"></a>

```go
func ConfigDrive() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HypervisorHostname`<sup>Required</sup> <a name="HypervisorHostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hypervisorHostname"></a>

```go
func HypervisorHostname() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.kernelId"></a>

```go
func KernelId() *string
```

- *Type:* *string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.locked"></a>

```go
func Locked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.network"></a>

```go
func Network() DataOpentelekomcloudComputeBmsServerV2NetworkList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList">DataOpentelekomcloudComputeBmsServerV2NetworkList</a>

---

##### `Progress`<sup>Required</sup> <a name="Progress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.progress"></a>

```go
func Progress() *f64
```

- *Type:* *f64

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.securityGroups"></a>

```go
func SecurityGroups() DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList">DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorIdInput"></a>

```go
func FlavorIdInput() *string
```

- *Type:* *string

---

##### `HostStatusInput`<sup>Optional</sup> <a name="HostStatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatusInput"></a>

```go
func HostStatusInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.flavorId"></a>

```go
func FlavorId() *string
```

- *Type:* *string

---

##### `HostStatus`<sup>Required</sup> <a name="HostStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.hostStatus"></a>

```go
func HostStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeBmsServerV2Config <a name="DataOpentelekomcloudComputeBmsServerV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

&dataopentelekomcloudcomputebmsserverv2.DataOpentelekomcloudComputeBmsServerV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FlavorId: *string,
	HostStatus: *string,
	Id: *string,
	ImageId: *string,
	KeyName: *string,
	Name: *string,
	Region: *string,
	Status: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.flavorId">FlavorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.hostStatus">HostStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#id DataOpentelekomcloudComputeBmsServerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#name DataOpentelekomcloudComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#region DataOpentelekomcloudComputeBmsServerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#status DataOpentelekomcloudComputeBmsServerV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FlavorId`<sup>Optional</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.flavorId"></a>

```go
FlavorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#flavor_id DataOpentelekomcloudComputeBmsServerV2#flavor_id}.

---

##### `HostStatus`<sup>Optional</sup> <a name="HostStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.hostStatus"></a>

```go
HostStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#host_status DataOpentelekomcloudComputeBmsServerV2#host_status}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#id DataOpentelekomcloudComputeBmsServerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#image_id DataOpentelekomcloudComputeBmsServerV2#image_id}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#key_name DataOpentelekomcloudComputeBmsServerV2#key_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#name DataOpentelekomcloudComputeBmsServerV2#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#region DataOpentelekomcloudComputeBmsServerV2#region}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#status DataOpentelekomcloudComputeBmsServerV2#status}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Config.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/compute_bms_server_v2#user_id DataOpentelekomcloudComputeBmsServerV2#user_id}.

---

### DataOpentelekomcloudComputeBmsServerV2Network <a name="DataOpentelekomcloudComputeBmsServerV2Network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

&dataopentelekomcloudcomputebmsserverv2.DataOpentelekomcloudComputeBmsServerV2Network {

}
```


### DataOpentelekomcloudComputeBmsServerV2SecurityGroups <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

&dataopentelekomcloudcomputebmsserverv2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudComputeBmsServerV2NetworkList <a name="DataOpentelekomcloudComputeBmsServerV2NetworkList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

dataopentelekomcloudcomputebmsserverv2.NewDataOpentelekomcloudComputeBmsServerV2NetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudComputeBmsServerV2NetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference <a name="DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

dataopentelekomcloudcomputebmsserverv2.NewDataOpentelekomcloudComputeBmsServerV2NetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.mac">Mac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network">DataOpentelekomcloudComputeBmsServerV2Network</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.mac"></a>

```go
func Mac() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2NetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudComputeBmsServerV2Network
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2Network">DataOpentelekomcloudComputeBmsServerV2Network</a>

---


### DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

dataopentelekomcloudcomputebmsserverv2.NewDataOpentelekomcloudComputeBmsServerV2SecurityGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference <a name="DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcomputebmsserverv2"

dataopentelekomcloudcomputebmsserverv2.NewDataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups">DataOpentelekomcloudComputeBmsServerV2SecurityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudComputeBmsServerV2SecurityGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeBmsServerV2.DataOpentelekomcloudComputeBmsServerV2SecurityGroups">DataOpentelekomcloudComputeBmsServerV2SecurityGroups</a>

---



