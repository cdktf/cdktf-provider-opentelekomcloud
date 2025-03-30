# `wafDedicatedPolicyV1` Submodule <a name="`wafDedicatedPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedPolicyV1 <a name="WafDedicatedPolicyV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1 opentelekomcloud_waf_dedicated_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

wafdedicatedpolicyv1.NewWafDedicatedPolicyV1(scope Construct, id *string, config WafDedicatedPolicyV1Config) WafDedicatedPolicyV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config">WafDedicatedPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config">WafDedicatedPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetDeepInspection">ResetDeepInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetFullDetection">ResetFullDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetHeaderInspection">ResetHeaderInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetProtectionMode">ResetProtectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetShiroDecryptionCheck">ResetShiroDecryptionCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions"></a>

```go
func PutOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts"></a>

```go
func PutTimeouts(value WafDedicatedPolicyV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

---

##### `ResetDeepInspection` <a name="ResetDeepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetDeepInspection"></a>

```go
func ResetDeepInspection()
```

##### `ResetFullDetection` <a name="ResetFullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetFullDetection"></a>

```go
func ResetFullDetection()
```

##### `ResetHeaderInspection` <a name="ResetHeaderInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetHeaderInspection"></a>

```go
func ResetHeaderInspection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetId"></a>

```go
func ResetId()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetProtectionMode` <a name="ResetProtectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetProtectionMode"></a>

```go
func ResetProtectionMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetShiroDecryptionCheck` <a name="ResetShiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetShiroDecryptionCheck"></a>

```go
func ResetShiroDecryptionCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

wafdedicatedpolicyv1.WafDedicatedPolicyV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

wafdedicatedpolicyv1.WafDedicatedPolicyV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

wafdedicatedpolicyv1.WafDedicatedPolicyV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

wafdedicatedpolicyv1.WafDedicatedPolicyV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WafDedicatedPolicyV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WafDedicatedPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.options">Options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList">WafDedicatedPolicyV1OptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference">WafDedicatedPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspectionInput">DeepInspectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetectionInput">FullDetectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspectionInput">HeaderInspectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.levelInput">LevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionModeInput">ProtectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheckInput">ShiroDecryptionCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspection">DeepInspection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetection">FullDetection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspection">HeaderInspection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.level">Level</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheck">ShiroDecryptionCheck</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.options"></a>

```go
func Options() WafDedicatedPolicyV1OptionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList">WafDedicatedPolicyV1OptionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeouts"></a>

```go
func Timeouts() WafDedicatedPolicyV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference">WafDedicatedPolicyV1TimeoutsOutputReference</a>

---

##### `DeepInspectionInput`<sup>Optional</sup> <a name="DeepInspectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspectionInput"></a>

```go
func DeepInspectionInput() interface{}
```

- *Type:* interface{}

---

##### `FullDetectionInput`<sup>Optional</sup> <a name="FullDetectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetectionInput"></a>

```go
func FullDetectionInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInspectionInput`<sup>Optional</sup> <a name="HeaderInspectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspectionInput"></a>

```go
func HeaderInspectionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.levelInput"></a>

```go
func LevelInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectionModeInput`<sup>Optional</sup> <a name="ProtectionModeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionModeInput"></a>

```go
func ProtectionModeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ShiroDecryptionCheckInput`<sup>Optional</sup> <a name="ShiroDecryptionCheckInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheckInput"></a>

```go
func ShiroDecryptionCheckInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeepInspection`<sup>Required</sup> <a name="DeepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspection"></a>

```go
func DeepInspection() interface{}
```

- *Type:* interface{}

---

##### `FullDetection`<sup>Required</sup> <a name="FullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetection"></a>

```go
func FullDetection() interface{}
```

- *Type:* interface{}

---

##### `HeaderInspection`<sup>Required</sup> <a name="HeaderInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspection"></a>

```go
func HeaderInspection() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.level"></a>

```go
func Level() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionMode"></a>

```go
func ProtectionMode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ShiroDecryptionCheck`<sup>Required</sup> <a name="ShiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheck"></a>

```go
func ShiroDecryptionCheck() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedPolicyV1Config <a name="WafDedicatedPolicyV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

&wafdedicatedpolicyv1.WafDedicatedPolicyV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DeepInspection: interface{},
	FullDetection: interface{},
	HeaderInspection: interface{},
	Id: *string,
	Level: *f64,
	Options: interface{},
	ProtectionMode: *string,
	Region: *string,
	ShiroDecryptionCheck: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.deepInspection">DeepInspection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.fullDetection">FullDetection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.headerInspection">HeaderInspection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.level">Level</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.options">Options</a></code> | <code>interface{}</code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.shiroDecryptionCheck">ShiroDecryptionCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}.

---

##### `DeepInspection`<sup>Optional</sup> <a name="DeepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.deepInspection"></a>

```go
DeepInspection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}.

---

##### `FullDetection`<sup>Optional</sup> <a name="FullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.fullDetection"></a>

```go
FullDetection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}.

---

##### `HeaderInspection`<sup>Optional</sup> <a name="HeaderInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.headerInspection"></a>

```go
HeaderInspection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.level"></a>

```go
Level *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.options"></a>

```go
Options interface{}
```

- *Type:* interface{}

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#options WafDedicatedPolicyV1#options}

---

##### `ProtectionMode`<sup>Optional</sup> <a name="ProtectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.protectionMode"></a>

```go
ProtectionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}.

---

##### `ShiroDecryptionCheck`<sup>Optional</sup> <a name="ShiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.shiroDecryptionCheck"></a>

```go
ShiroDecryptionCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.timeouts"></a>

```go
Timeouts WafDedicatedPolicyV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#timeouts WafDedicatedPolicyV1#timeouts}

---

### WafDedicatedPolicyV1Options <a name="WafDedicatedPolicyV1Options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

&wafdedicatedpolicyv1.WafDedicatedPolicyV1Options {
	AntiCrawler: interface{},
	AntiLeakage: interface{},
	AntiTamper: interface{},
	Blacklist: interface{},
	Cc: interface{},
	Common: interface{},
	Crawler: interface{},
	CrawlerEngine: interface{},
	CrawlerOther: interface{},
	CrawlerScanner: interface{},
	CrawlerScript: interface{},
	Custom: interface{},
	FollowedAction: interface{},
	GeolocationAccessControl: interface{},
	Ignore: interface{},
	Privacy: interface{},
	WebAttack: interface{},
	WebShell: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiCrawler">AntiCrawler</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiLeakage">AntiLeakage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiTamper">AntiTamper</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.blacklist">Blacklist</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.cc">Cc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.common">Common</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawler">Crawler</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerEngine">CrawlerEngine</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerOther">CrawlerOther</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScanner">CrawlerScanner</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScript">CrawlerScript</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.custom">Custom</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.followedAction">FollowedAction</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.geolocationAccessControl">GeolocationAccessControl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.ignore">Ignore</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.privacy">Privacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webAttack">WebAttack</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webShell">WebShell</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}. |

---

##### `AntiCrawler`<sup>Optional</sup> <a name="AntiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiCrawler"></a>

```go
AntiCrawler interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}.

---

##### `AntiLeakage`<sup>Optional</sup> <a name="AntiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiLeakage"></a>

```go
AntiLeakage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}.

---

##### `AntiTamper`<sup>Optional</sup> <a name="AntiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiTamper"></a>

```go
AntiTamper interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}.

---

##### `Blacklist`<sup>Optional</sup> <a name="Blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.blacklist"></a>

```go
Blacklist interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}.

---

##### `Cc`<sup>Optional</sup> <a name="Cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.cc"></a>

```go
Cc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}.

---

##### `Common`<sup>Optional</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.common"></a>

```go
Common interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}.

---

##### `Crawler`<sup>Optional</sup> <a name="Crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawler"></a>

```go
Crawler interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}.

---

##### `CrawlerEngine`<sup>Optional</sup> <a name="CrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerEngine"></a>

```go
CrawlerEngine interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}.

---

##### `CrawlerOther`<sup>Optional</sup> <a name="CrawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerOther"></a>

```go
CrawlerOther interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}.

---

##### `CrawlerScanner`<sup>Optional</sup> <a name="CrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScanner"></a>

```go
CrawlerScanner interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}.

---

##### `CrawlerScript`<sup>Optional</sup> <a name="CrawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScript"></a>

```go
CrawlerScript interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.custom"></a>

```go
Custom interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}.

---

##### `FollowedAction`<sup>Optional</sup> <a name="FollowedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.followedAction"></a>

```go
FollowedAction interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}.

---

##### `GeolocationAccessControl`<sup>Optional</sup> <a name="GeolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.geolocationAccessControl"></a>

```go
GeolocationAccessControl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}.

---

##### `Ignore`<sup>Optional</sup> <a name="Ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.ignore"></a>

```go
Ignore interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}.

---

##### `Privacy`<sup>Optional</sup> <a name="Privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.privacy"></a>

```go
Privacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}.

---

##### `WebAttack`<sup>Optional</sup> <a name="WebAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webAttack"></a>

```go
WebAttack interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}.

---

##### `WebShell`<sup>Optional</sup> <a name="WebShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webShell"></a>

```go
WebShell interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}.

---

### WafDedicatedPolicyV1Timeouts <a name="WafDedicatedPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

&wafdedicatedpolicyv1.WafDedicatedPolicyV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedPolicyV1OptionsList <a name="WafDedicatedPolicyV1OptionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

wafdedicatedpolicyv1.NewWafDedicatedPolicyV1OptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafDedicatedPolicyV1OptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get"></a>

```go
func Get(index *f64) WafDedicatedPolicyV1OptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedPolicyV1OptionsOutputReference <a name="WafDedicatedPolicyV1OptionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

wafdedicatedpolicyv1.NewWafDedicatedPolicyV1OptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafDedicatedPolicyV1OptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiCrawler">ResetAntiCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiLeakage">ResetAntiLeakage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiTamper">ResetAntiTamper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetBlacklist">ResetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCc">ResetCc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCommon">ResetCommon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawler">ResetCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerEngine">ResetCrawlerEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerOther">ResetCrawlerOther</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScanner">ResetCrawlerScanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScript">ResetCrawlerScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetFollowedAction">ResetFollowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetGeolocationAccessControl">ResetGeolocationAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetIgnore">ResetIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetPrivacy">ResetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebAttack">ResetWebAttack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebShell">ResetWebShell</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAntiCrawler` <a name="ResetAntiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiCrawler"></a>

```go
func ResetAntiCrawler()
```

##### `ResetAntiLeakage` <a name="ResetAntiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiLeakage"></a>

```go
func ResetAntiLeakage()
```

##### `ResetAntiTamper` <a name="ResetAntiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiTamper"></a>

```go
func ResetAntiTamper()
```

##### `ResetBlacklist` <a name="ResetBlacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetBlacklist"></a>

```go
func ResetBlacklist()
```

##### `ResetCc` <a name="ResetCc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCc"></a>

```go
func ResetCc()
```

##### `ResetCommon` <a name="ResetCommon" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCommon"></a>

```go
func ResetCommon()
```

##### `ResetCrawler` <a name="ResetCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawler"></a>

```go
func ResetCrawler()
```

##### `ResetCrawlerEngine` <a name="ResetCrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerEngine"></a>

```go
func ResetCrawlerEngine()
```

##### `ResetCrawlerOther` <a name="ResetCrawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerOther"></a>

```go
func ResetCrawlerOther()
```

##### `ResetCrawlerScanner` <a name="ResetCrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScanner"></a>

```go
func ResetCrawlerScanner()
```

##### `ResetCrawlerScript` <a name="ResetCrawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScript"></a>

```go
func ResetCrawlerScript()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetFollowedAction` <a name="ResetFollowedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetFollowedAction"></a>

```go
func ResetFollowedAction()
```

##### `ResetGeolocationAccessControl` <a name="ResetGeolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetGeolocationAccessControl"></a>

```go
func ResetGeolocationAccessControl()
```

##### `ResetIgnore` <a name="ResetIgnore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetIgnore"></a>

```go
func ResetIgnore()
```

##### `ResetPrivacy` <a name="ResetPrivacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetPrivacy"></a>

```go
func ResetPrivacy()
```

##### `ResetWebAttack` <a name="ResetWebAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebAttack"></a>

```go
func ResetWebAttack()
```

##### `ResetWebShell` <a name="ResetWebShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebShell"></a>

```go
func ResetWebShell()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.botEnable">BotEnable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.precise">Precise</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawlerInput">AntiCrawlerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakageInput">AntiLeakageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamperInput">AntiTamperInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklistInput">BlacklistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ccInput">CcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.commonInput">CommonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngineInput">CrawlerEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerInput">CrawlerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOtherInput">CrawlerOtherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScannerInput">CrawlerScannerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScriptInput">CrawlerScriptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedActionInput">FollowedActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControlInput">GeolocationAccessControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignoreInput">IgnoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacyInput">PrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttackInput">WebAttackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShellInput">WebShellInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawler">AntiCrawler</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakage">AntiLeakage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamper">AntiTamper</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklist">Blacklist</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.cc">Cc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.common">Common</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawler">Crawler</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngine">CrawlerEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOther">CrawlerOther</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScanner">CrawlerScanner</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScript">CrawlerScript</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.custom">Custom</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedAction">FollowedAction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControl">GeolocationAccessControl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignore">Ignore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacy">Privacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttack">WebAttack</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShell">WebShell</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BotEnable`<sup>Required</sup> <a name="BotEnable" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.botEnable"></a>

```go
func BotEnable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Precise`<sup>Required</sup> <a name="Precise" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.precise"></a>

```go
func Precise() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AntiCrawlerInput`<sup>Optional</sup> <a name="AntiCrawlerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawlerInput"></a>

```go
func AntiCrawlerInput() interface{}
```

- *Type:* interface{}

---

##### `AntiLeakageInput`<sup>Optional</sup> <a name="AntiLeakageInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakageInput"></a>

```go
func AntiLeakageInput() interface{}
```

- *Type:* interface{}

---

##### `AntiTamperInput`<sup>Optional</sup> <a name="AntiTamperInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamperInput"></a>

```go
func AntiTamperInput() interface{}
```

- *Type:* interface{}

---

##### `BlacklistInput`<sup>Optional</sup> <a name="BlacklistInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklistInput"></a>

```go
func BlacklistInput() interface{}
```

- *Type:* interface{}

---

##### `CcInput`<sup>Optional</sup> <a name="CcInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ccInput"></a>

```go
func CcInput() interface{}
```

- *Type:* interface{}

---

##### `CommonInput`<sup>Optional</sup> <a name="CommonInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.commonInput"></a>

```go
func CommonInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerEngineInput`<sup>Optional</sup> <a name="CrawlerEngineInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngineInput"></a>

```go
func CrawlerEngineInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerInput`<sup>Optional</sup> <a name="CrawlerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerInput"></a>

```go
func CrawlerInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerOtherInput`<sup>Optional</sup> <a name="CrawlerOtherInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOtherInput"></a>

```go
func CrawlerOtherInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerScannerInput`<sup>Optional</sup> <a name="CrawlerScannerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScannerInput"></a>

```go
func CrawlerScannerInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerScriptInput`<sup>Optional</sup> <a name="CrawlerScriptInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScriptInput"></a>

```go
func CrawlerScriptInput() interface{}
```

- *Type:* interface{}

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `FollowedActionInput`<sup>Optional</sup> <a name="FollowedActionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedActionInput"></a>

```go
func FollowedActionInput() interface{}
```

- *Type:* interface{}

---

##### `GeolocationAccessControlInput`<sup>Optional</sup> <a name="GeolocationAccessControlInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControlInput"></a>

```go
func GeolocationAccessControlInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreInput`<sup>Optional</sup> <a name="IgnoreInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignoreInput"></a>

```go
func IgnoreInput() interface{}
```

- *Type:* interface{}

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacyInput"></a>

```go
func PrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `WebAttackInput`<sup>Optional</sup> <a name="WebAttackInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttackInput"></a>

```go
func WebAttackInput() interface{}
```

- *Type:* interface{}

---

##### `WebShellInput`<sup>Optional</sup> <a name="WebShellInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShellInput"></a>

```go
func WebShellInput() interface{}
```

- *Type:* interface{}

---

##### `AntiCrawler`<sup>Required</sup> <a name="AntiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawler"></a>

```go
func AntiCrawler() interface{}
```

- *Type:* interface{}

---

##### `AntiLeakage`<sup>Required</sup> <a name="AntiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakage"></a>

```go
func AntiLeakage() interface{}
```

- *Type:* interface{}

---

##### `AntiTamper`<sup>Required</sup> <a name="AntiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamper"></a>

```go
func AntiTamper() interface{}
```

- *Type:* interface{}

---

##### `Blacklist`<sup>Required</sup> <a name="Blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklist"></a>

```go
func Blacklist() interface{}
```

- *Type:* interface{}

---

##### `Cc`<sup>Required</sup> <a name="Cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.cc"></a>

```go
func Cc() interface{}
```

- *Type:* interface{}

---

##### `Common`<sup>Required</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.common"></a>

```go
func Common() interface{}
```

- *Type:* interface{}

---

##### `Crawler`<sup>Required</sup> <a name="Crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawler"></a>

```go
func Crawler() interface{}
```

- *Type:* interface{}

---

##### `CrawlerEngine`<sup>Required</sup> <a name="CrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngine"></a>

```go
func CrawlerEngine() interface{}
```

- *Type:* interface{}

---

##### `CrawlerOther`<sup>Required</sup> <a name="CrawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOther"></a>

```go
func CrawlerOther() interface{}
```

- *Type:* interface{}

---

##### `CrawlerScanner`<sup>Required</sup> <a name="CrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScanner"></a>

```go
func CrawlerScanner() interface{}
```

- *Type:* interface{}

---

##### `CrawlerScript`<sup>Required</sup> <a name="CrawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScript"></a>

```go
func CrawlerScript() interface{}
```

- *Type:* interface{}

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.custom"></a>

```go
func Custom() interface{}
```

- *Type:* interface{}

---

##### `FollowedAction`<sup>Required</sup> <a name="FollowedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedAction"></a>

```go
func FollowedAction() interface{}
```

- *Type:* interface{}

---

##### `GeolocationAccessControl`<sup>Required</sup> <a name="GeolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControl"></a>

```go
func GeolocationAccessControl() interface{}
```

- *Type:* interface{}

---

##### `Ignore`<sup>Required</sup> <a name="Ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignore"></a>

```go
func Ignore() interface{}
```

- *Type:* interface{}

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacy"></a>

```go
func Privacy() interface{}
```

- *Type:* interface{}

---

##### `WebAttack`<sup>Required</sup> <a name="WebAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttack"></a>

```go
func WebAttack() interface{}
```

- *Type:* interface{}

---

##### `WebShell`<sup>Required</sup> <a name="WebShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShell"></a>

```go
func WebShell() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedPolicyV1TimeoutsOutputReference <a name="WafDedicatedPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedpolicyv1"

wafdedicatedpolicyv1.NewWafDedicatedPolicyV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafDedicatedPolicyV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



