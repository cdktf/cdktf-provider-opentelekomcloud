# `wafDedicatedAlarmMaskingRuleV1` Submodule <a name="`wafDedicatedAlarmMaskingRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedAlarmMaskingRuleV1 <a name="WafDedicatedAlarmMaskingRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1 opentelekomcloud_waf_dedicated_alarm_masking_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.NewWafDedicatedAlarmMaskingRuleV1(scope Construct, id *string, config WafDedicatedAlarmMaskingRuleV1Config) WafDedicatedAlarmMaskingRuleV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config">WafDedicatedAlarmMaskingRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config">WafDedicatedAlarmMaskingRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings">PutAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetAdvancedSettings">ResetAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedSettings` <a name="PutAdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings"></a>

```go
func PutAdvancedSettings(value WafDedicatedAlarmMaskingRuleV1AdvancedSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putAdvancedSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts"></a>

```go
func PutTimeouts(value WafDedicatedAlarmMaskingRuleV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

---

##### `ResetAdvancedSettings` <a name="ResetAdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetAdvancedSettings"></a>

```go
func ResetAdvancedSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedAlarmMaskingRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.WafDedicatedAlarmMaskingRuleV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.WafDedicatedAlarmMaskingRuleV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.WafDedicatedAlarmMaskingRuleV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.WafDedicatedAlarmMaskingRuleV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WafDedicatedAlarmMaskingRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WafDedicatedAlarmMaskingRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WafDedicatedAlarmMaskingRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedAlarmMaskingRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettings">AdvancedSettings</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference">WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList">WafDedicatedAlarmMaskingRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference">WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettingsInput">AdvancedSettingsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedSettings`<sup>Required</sup> <a name="AdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettings"></a>

```go
func AdvancedSettings() WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference">WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditions"></a>

```go
func Conditions() WafDedicatedAlarmMaskingRuleV1ConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList">WafDedicatedAlarmMaskingRuleV1ConditionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeouts"></a>

```go
func Timeouts() WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference">WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference</a>

---

##### `AdvancedSettingsInput`<sup>Optional</sup> <a name="AdvancedSettingsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.advancedSettingsInput"></a>

```go
func AdvancedSettingsInput() WafDedicatedAlarmMaskingRuleV1AdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedAlarmMaskingRuleV1AdvancedSettings <a name="WafDedicatedAlarmMaskingRuleV1AdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

&wafdedicatedalarmmaskingrulev1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings {
	Contents: *[]*string,
	Index: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.contents">Contents</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.index">Index</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}. |

---

##### `Contents`<sup>Optional</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.contents"></a>

```go
Contents *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings.property.index"></a>

```go
Index *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}.

---

### WafDedicatedAlarmMaskingRuleV1Conditions <a name="WafDedicatedAlarmMaskingRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

&wafdedicatedalarmmaskingrulev1.WafDedicatedAlarmMaskingRuleV1Conditions {
	Category: *string,
	LogicOperation: *string,
	Contents: *[]*string,
	Index: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#category WafDedicatedAlarmMaskingRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.logicOperation">LogicOperation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#logic_operation WafDedicatedAlarmMaskingRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.contents">Contents</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.index">Index</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#category WafDedicatedAlarmMaskingRuleV1#category}.

---

##### `LogicOperation`<sup>Required</sup> <a name="LogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.logicOperation"></a>

```go
LogicOperation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#logic_operation WafDedicatedAlarmMaskingRuleV1#logic_operation}.

---

##### `Contents`<sup>Optional</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.contents"></a>

```go
Contents *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#contents WafDedicatedAlarmMaskingRuleV1#contents}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Conditions.property.index"></a>

```go
Index *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#index WafDedicatedAlarmMaskingRuleV1#index}.

---

### WafDedicatedAlarmMaskingRuleV1Config <a name="WafDedicatedAlarmMaskingRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

&wafdedicatedalarmmaskingrulev1.WafDedicatedAlarmMaskingRuleV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Conditions: interface{},
	Domains: *[]*string,
	PolicyId: *string,
	Rule: *string,
	AdvancedSettings: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.domains">Domains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#domains WafDedicatedAlarmMaskingRuleV1#domains}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#policy_id WafDedicatedAlarmMaskingRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.rule">Rule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#rule WafDedicatedAlarmMaskingRuleV1#rule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.advancedSettings">AdvancedSettings</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#description WafDedicatedAlarmMaskingRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#id WafDedicatedAlarmMaskingRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#conditions WafDedicatedAlarmMaskingRuleV1#conditions}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#domains WafDedicatedAlarmMaskingRuleV1#domains}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#policy_id WafDedicatedAlarmMaskingRuleV1#policy_id}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#rule WafDedicatedAlarmMaskingRuleV1#rule}.

---

##### `AdvancedSettings`<sup>Optional</sup> <a name="AdvancedSettings" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.advancedSettings"></a>

```go
AdvancedSettings WafDedicatedAlarmMaskingRuleV1AdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#advanced_settings WafDedicatedAlarmMaskingRuleV1#advanced_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#description WafDedicatedAlarmMaskingRuleV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#id WafDedicatedAlarmMaskingRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Config.property.timeouts"></a>

```go
Timeouts WafDedicatedAlarmMaskingRuleV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts">WafDedicatedAlarmMaskingRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#timeouts WafDedicatedAlarmMaskingRuleV1#timeouts}

---

### WafDedicatedAlarmMaskingRuleV1Timeouts <a name="WafDedicatedAlarmMaskingRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

&wafdedicatedalarmmaskingrulev1.WafDedicatedAlarmMaskingRuleV1Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#create WafDedicatedAlarmMaskingRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#delete WafDedicatedAlarmMaskingRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#update WafDedicatedAlarmMaskingRuleV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#create WafDedicatedAlarmMaskingRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#delete WafDedicatedAlarmMaskingRuleV1#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/waf_dedicated_alarm_masking_rule_v1#update WafDedicatedAlarmMaskingRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.NewWafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetContents">ResetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetIndex">ResetIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContents` <a name="ResetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetContents"></a>

```go
func ResetContents()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.resetIndex"></a>

```go
func ResetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contents">Contents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contentsInput"></a>

```go
func ContentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.contents"></a>

```go
func Contents() *[]*string
```

- *Type:* *[]*string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WafDedicatedAlarmMaskingRuleV1AdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1AdvancedSettings">WafDedicatedAlarmMaskingRuleV1AdvancedSettings</a>

---


### WafDedicatedAlarmMaskingRuleV1ConditionsList <a name="WafDedicatedAlarmMaskingRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.NewWafDedicatedAlarmMaskingRuleV1ConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafDedicatedAlarmMaskingRuleV1ConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get"></a>

```go
func Get(index *f64) WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.NewWafDedicatedAlarmMaskingRuleV1ConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetContents">ResetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetIndex">ResetIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContents` <a name="ResetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetContents"></a>

```go
func ResetContents()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.resetIndex"></a>

```go
func ResetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperationInput">LogicOperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contents">Contents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperation">LogicOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contentsInput"></a>

```go
func ContentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `LogicOperationInput`<sup>Optional</sup> <a name="LogicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```go
func LogicOperationInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.contents"></a>

```go
func Contents() *[]*string
```

- *Type:* *[]*string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `LogicOperation`<sup>Required</sup> <a name="LogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.logicOperation"></a>

```go
func LogicOperation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1ConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference <a name="WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicatedalarmmaskingrulev1"

wafdedicatedalarmmaskingrulev1.NewWafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedAlarmMaskingRuleV1.WafDedicatedAlarmMaskingRuleV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



