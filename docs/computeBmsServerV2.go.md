# `computeBmsServerV2` Submodule <a name="`computeBmsServerV2` Submodule" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBmsServerV2 <a name="ComputeBmsServerV2" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2 opentelekomcloud_compute_bms_server_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.NewComputeBmsServerV2(scope Construct, id *string, config ComputeBmsServerV2Config) ComputeBmsServerV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config">ComputeBmsServerV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config">ComputeBmsServerV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice">PutBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetAdminPass">ResetAdminPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetBlockDevice">ResetBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorId">ResetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorName">ResetFlavorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetStopBeforeDestroy">ResetStopBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBlockDevice` <a name="PutBlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice"></a>

```go
func PutBlockDevice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork"></a>

```go
func PutNetwork(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts"></a>

```go
func PutTimeouts(value ComputeBmsServerV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

---

##### `ResetAdminPass` <a name="ResetAdminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetAdminPass"></a>

```go
func ResetAdminPass()
```

##### `ResetBlockDevice` <a name="ResetBlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetBlockDevice"></a>

```go
func ResetBlockDevice()
```

##### `ResetFlavorId` <a name="ResetFlavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorId"></a>

```go
func ResetFlavorId()
```

##### `ResetFlavorName` <a name="ResetFlavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorName"></a>

```go
func ResetFlavorName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetKeyPair"></a>

```go
func ResetKeyPair()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetStopBeforeDestroy` <a name="ResetStopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetStopBeforeDestroy"></a>

```go
func ResetStopBeforeDestroy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetUserData"></a>

```go
func ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.ComputeBmsServerV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.ComputeBmsServerV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.ComputeBmsServerV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV4">AccessIpV4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV6">AccessIpV6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDevice">BlockDevice</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList">ComputeBmsServerV2BlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.configDrive">ConfigDrive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostStatus">HostStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.kernelId">KernelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.network">Network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList">ComputeBmsServerV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference">ComputeBmsServerV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPassInput">AdminPassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDeviceInput">BlockDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorNameInput">FlavorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPairInput">KeyPairInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.networkInput">NetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroyInput">StopBeforeDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPass">AdminPass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorId">FlavorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorName">FlavorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPair">KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroy">StopBeforeDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessIpV4`<sup>Required</sup> <a name="AccessIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV4"></a>

```go
func AccessIpV4() *string
```

- *Type:* *string

---

##### `AccessIpV6`<sup>Required</sup> <a name="AccessIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV6"></a>

```go
func AccessIpV6() *string
```

- *Type:* *string

---

##### `BlockDevice`<sup>Required</sup> <a name="BlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDevice"></a>

```go
func BlockDevice() ComputeBmsServerV2BlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList">ComputeBmsServerV2BlockDeviceList</a>

---

##### `ConfigDrive`<sup>Required</sup> <a name="ConfigDrive" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.configDrive"></a>

```go
func ConfigDrive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostStatus`<sup>Required</sup> <a name="HostStatus" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostStatus"></a>

```go
func HostStatus() *string
```

- *Type:* *string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.kernelId"></a>

```go
func KernelId() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.network"></a>

```go
func Network() ComputeBmsServerV2NetworkList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList">ComputeBmsServerV2NetworkList</a>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeouts"></a>

```go
func Timeouts() ComputeBmsServerV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference">ComputeBmsServerV2TimeoutsOutputReference</a>

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `AdminPassInput`<sup>Optional</sup> <a name="AdminPassInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPassInput"></a>

```go
func AdminPassInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BlockDeviceInput`<sup>Optional</sup> <a name="BlockDeviceInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDeviceInput"></a>

```go
func BlockDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorIdInput"></a>

```go
func FlavorIdInput() *string
```

- *Type:* *string

---

##### `FlavorNameInput`<sup>Optional</sup> <a name="FlavorNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorNameInput"></a>

```go
func FlavorNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPairInput"></a>

```go
func KeyPairInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.networkInput"></a>

```go
func NetworkInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StopBeforeDestroyInput`<sup>Optional</sup> <a name="StopBeforeDestroyInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroyInput"></a>

```go
func StopBeforeDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AdminPass`<sup>Required</sup> <a name="AdminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPass"></a>

```go
func AdminPass() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorId"></a>

```go
func FlavorId() *string
```

- *Type:* *string

---

##### `FlavorName`<sup>Required</sup> <a name="FlavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorName"></a>

```go
func FlavorName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPair"></a>

```go
func KeyPair() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `StopBeforeDestroy`<sup>Required</sup> <a name="StopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroy"></a>

```go
func StopBeforeDestroy() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBmsServerV2BlockDevice <a name="ComputeBmsServerV2BlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

&computebmsserverv2.ComputeBmsServerV2BlockDevice {
	SourceType: *string,
	BootIndex: *f64,
	DeleteOnTermination: interface{},
	DestinationType: *string,
	DeviceName: *string,
	GuestFormat: *string,
	Uuid: *string,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#source_type ComputeBmsServerV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.bootIndex">BootIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#boot_index ComputeBmsServerV2#boot_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#delete_on_termination ComputeBmsServerV2#delete_on_termination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#destination_type ComputeBmsServerV2#destination_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#device_name ComputeBmsServerV2#device_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.guestFormat">GuestFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#guest_format ComputeBmsServerV2#guest_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.uuid">Uuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#volume_size ComputeBmsServerV2#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#volume_type ComputeBmsServerV2#volume_type}. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#source_type ComputeBmsServerV2#source_type}.

---

##### `BootIndex`<sup>Optional</sup> <a name="BootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.bootIndex"></a>

```go
BootIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#boot_index ComputeBmsServerV2#boot_index}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#delete_on_termination ComputeBmsServerV2#delete_on_termination}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#destination_type ComputeBmsServerV2#destination_type}.

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#device_name ComputeBmsServerV2#device_name}.

---

##### `GuestFormat`<sup>Optional</sup> <a name="GuestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.guestFormat"></a>

```go
GuestFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#guest_format ComputeBmsServerV2#guest_format}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#volume_size ComputeBmsServerV2#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#volume_type ComputeBmsServerV2#volume_type}.

---

### ComputeBmsServerV2Config <a name="ComputeBmsServerV2Config" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

&computebmsserverv2.ComputeBmsServerV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZone: *string,
	Name: *string,
	AdminPass: *string,
	BlockDevice: interface{},
	FlavorId: *string,
	FlavorName: *string,
	Id: *string,
	ImageId: *string,
	ImageName: *string,
	KeyPair: *string,
	Metadata: *map[string]*string,
	Network: interface{},
	Region: *string,
	SecurityGroups: *[]*string,
	StopBeforeDestroy: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#availability_zone ComputeBmsServerV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#name ComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.adminPass">AdminPass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#admin_pass ComputeBmsServerV2#admin_pass}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.blockDevice">BlockDevice</a></code> | <code>interface{}</code> | block_device block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorId">FlavorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#flavor_id ComputeBmsServerV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorName">FlavorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#flavor_name ComputeBmsServerV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#id ComputeBmsServerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#image_id ComputeBmsServerV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#image_name ComputeBmsServerV2#image_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.keyPair">KeyPair</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#key_pair ComputeBmsServerV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#metadata ComputeBmsServerV2#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.network">Network</a></code> | <code>interface{}</code> | network block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#region ComputeBmsServerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#security_groups ComputeBmsServerV2#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.stopBeforeDestroy">StopBeforeDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#stop_before_destroy ComputeBmsServerV2#stop_before_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#tags ComputeBmsServerV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#user_data ComputeBmsServerV2#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#availability_zone ComputeBmsServerV2#availability_zone}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#name ComputeBmsServerV2#name}.

---

##### `AdminPass`<sup>Optional</sup> <a name="AdminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.adminPass"></a>

```go
AdminPass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#admin_pass ComputeBmsServerV2#admin_pass}.

---

##### `BlockDevice`<sup>Optional</sup> <a name="BlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.blockDevice"></a>

```go
BlockDevice interface{}
```

- *Type:* interface{}

block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#block_device ComputeBmsServerV2#block_device}

---

##### `FlavorId`<sup>Optional</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorId"></a>

```go
FlavorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#flavor_id ComputeBmsServerV2#flavor_id}.

---

##### `FlavorName`<sup>Optional</sup> <a name="FlavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorName"></a>

```go
FlavorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#flavor_name ComputeBmsServerV2#flavor_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#id ComputeBmsServerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#image_id ComputeBmsServerV2#image_id}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#image_name ComputeBmsServerV2#image_name}.

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.keyPair"></a>

```go
KeyPair *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#key_pair ComputeBmsServerV2#key_pair}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#metadata ComputeBmsServerV2#metadata}.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.network"></a>

```go
Network interface{}
```

- *Type:* interface{}

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#network ComputeBmsServerV2#network}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#region ComputeBmsServerV2#region}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#security_groups ComputeBmsServerV2#security_groups}.

---

##### `StopBeforeDestroy`<sup>Optional</sup> <a name="StopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.stopBeforeDestroy"></a>

```go
StopBeforeDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#stop_before_destroy ComputeBmsServerV2#stop_before_destroy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#tags ComputeBmsServerV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.timeouts"></a>

```go
Timeouts ComputeBmsServerV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#timeouts ComputeBmsServerV2#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#user_data ComputeBmsServerV2#user_data}.

---

### ComputeBmsServerV2Network <a name="ComputeBmsServerV2Network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

&computebmsserverv2.ComputeBmsServerV2Network {
	AccessNetwork: interface{},
	FixedIpV4: *string,
	FixedIpV6: *string,
	Name: *string,
	Port: *string,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.accessNetwork">AccessNetwork</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#access_network ComputeBmsServerV2#access_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV4">FixedIpV4</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#fixed_ip_v4 ComputeBmsServerV2#fixed_ip_v4}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV6">FixedIpV6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#fixed_ip_v6 ComputeBmsServerV2#fixed_ip_v6}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#name ComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#port ComputeBmsServerV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.uuid">Uuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}. |

---

##### `AccessNetwork`<sup>Optional</sup> <a name="AccessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.accessNetwork"></a>

```go
AccessNetwork interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#access_network ComputeBmsServerV2#access_network}.

---

##### `FixedIpV4`<sup>Optional</sup> <a name="FixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV4"></a>

```go
FixedIpV4 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#fixed_ip_v4 ComputeBmsServerV2#fixed_ip_v4}.

---

##### `FixedIpV6`<sup>Optional</sup> <a name="FixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV6"></a>

```go
FixedIpV6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#fixed_ip_v6 ComputeBmsServerV2#fixed_ip_v6}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#name ComputeBmsServerV2#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#port ComputeBmsServerV2#port}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}.

---

### ComputeBmsServerV2Timeouts <a name="ComputeBmsServerV2Timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

&computebmsserverv2.ComputeBmsServerV2Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#create ComputeBmsServerV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#delete ComputeBmsServerV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#update ComputeBmsServerV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#create ComputeBmsServerV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#delete ComputeBmsServerV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_bms_server_v2#update ComputeBmsServerV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBmsServerV2BlockDeviceList <a name="ComputeBmsServerV2BlockDeviceList" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.NewComputeBmsServerV2BlockDeviceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeBmsServerV2BlockDeviceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get"></a>

```go
func Get(index *f64) ComputeBmsServerV2BlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBmsServerV2BlockDeviceOutputReference <a name="ComputeBmsServerV2BlockDeviceOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.NewComputeBmsServerV2BlockDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeBmsServerV2BlockDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetBootIndex">ResetBootIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetGuestFormat">ResetGuestFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootIndex` <a name="ResetBootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetBootIndex"></a>

```go
func ResetBootIndex()
```

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetGuestFormat` <a name="ResetGuestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetGuestFormat"></a>

```go
func ResetGuestFormat()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetUuid"></a>

```go
func ResetUuid()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndexInput">BootIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormatInput">GuestFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndex">BootIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormat">GuestFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootIndexInput`<sup>Optional</sup> <a name="BootIndexInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndexInput"></a>

```go
func BootIndexInput() *f64
```

- *Type:* *f64

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `GuestFormatInput`<sup>Optional</sup> <a name="GuestFormatInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormatInput"></a>

```go
func GuestFormatInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `BootIndex`<sup>Required</sup> <a name="BootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndex"></a>

```go
func BootIndex() *f64
```

- *Type:* *f64

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `GuestFormat`<sup>Required</sup> <a name="GuestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormat"></a>

```go
func GuestFormat() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBmsServerV2NetworkList <a name="ComputeBmsServerV2NetworkList" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.NewComputeBmsServerV2NetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeBmsServerV2NetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get"></a>

```go
func Get(index *f64) ComputeBmsServerV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBmsServerV2NetworkOutputReference <a name="ComputeBmsServerV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.NewComputeBmsServerV2NetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeBmsServerV2NetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetAccessNetwork">ResetAccessNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV4">ResetFixedIpV4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV6">ResetFixedIpV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessNetwork` <a name="ResetAccessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetAccessNetwork"></a>

```go
func ResetAccessNetwork()
```

##### `ResetFixedIpV4` <a name="ResetFixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV4"></a>

```go
func ResetFixedIpV4()
```

##### `ResetFixedIpV6` <a name="ResetFixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV6"></a>

```go
func ResetFixedIpV6()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetUuid"></a>

```go
func ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.mac">Mac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetworkInput">AccessNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4Input">FixedIpV4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6Input">FixedIpV6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetwork">AccessNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4">FixedIpV4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6">FixedIpV6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.mac"></a>

```go
func Mac() *string
```

- *Type:* *string

---

##### `AccessNetworkInput`<sup>Optional</sup> <a name="AccessNetworkInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetworkInput"></a>

```go
func AccessNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `FixedIpV4Input`<sup>Optional</sup> <a name="FixedIpV4Input" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4Input"></a>

```go
func FixedIpV4Input() *string
```

- *Type:* *string

---

##### `FixedIpV6Input`<sup>Optional</sup> <a name="FixedIpV6Input" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6Input"></a>

```go
func FixedIpV6Input() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `AccessNetwork`<sup>Required</sup> <a name="AccessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetwork"></a>

```go
func AccessNetwork() interface{}
```

- *Type:* interface{}

---

##### `FixedIpV4`<sup>Required</sup> <a name="FixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4"></a>

```go
func FixedIpV4() *string
```

- *Type:* *string

---

##### `FixedIpV6`<sup>Required</sup> <a name="FixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6"></a>

```go
func FixedIpV6() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBmsServerV2TimeoutsOutputReference <a name="ComputeBmsServerV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computebmsserverv2"

computebmsserverv2.NewComputeBmsServerV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeBmsServerV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



