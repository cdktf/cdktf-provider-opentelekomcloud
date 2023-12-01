# `wafDedicatedPreciseProtectionRuleV1` Submodule <a name="`wafDedicatedPreciseProtectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedPreciseProtectionRuleV1 <a name="WafDedicatedPreciseProtectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1 opentelekomcloud_waf_dedicated_precise_protection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.NewWafDedicatedPreciseProtectionRuleV1(scope Construct, id *string, config WafDedicatedPreciseProtectionRuleV1Config) WafDedicatedPreciseProtectionRuleV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config">WafDedicatedPreciseProtectionRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config">WafDedicatedPreciseProtectionRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTerminal">ResetTerminal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts"></a>

```go
func PutTimeouts(value WafDedicatedPreciseProtectionRuleV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetId"></a>

```go
func ResetId()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetStart"></a>

```go
func ResetStart()
```

##### `ResetTerminal` <a name="ResetTerminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTerminal"></a>

```go
func ResetTerminal()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedPreciseProtectionRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.WafDedicatedPreciseProtectionRuleV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.WafDedicatedPreciseProtectionRuleV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.WafDedicatedPreciseProtectionRuleV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.WafDedicatedPreciseProtectionRuleV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WafDedicatedPreciseProtectionRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WafDedicatedPreciseProtectionRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WafDedicatedPreciseProtectionRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedPreciseProtectionRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.action">Action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList">WafDedicatedPreciseProtectionRuleV1ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList">WafDedicatedPreciseProtectionRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference">WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.startInput">StartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminalInput">TerminalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeInput">TimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminal">Terminal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.time">Time</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.action"></a>

```go
func Action() WafDedicatedPreciseProtectionRuleV1ActionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList">WafDedicatedPreciseProtectionRuleV1ActionList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditions"></a>

```go
func Conditions() WafDedicatedPreciseProtectionRuleV1ConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList">WafDedicatedPreciseProtectionRuleV1ConditionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeouts"></a>

```go
func Timeouts() WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference">WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.startInput"></a>

```go
func StartInput() *f64
```

- *Type:* *f64

---

##### `TerminalInput`<sup>Optional</sup> <a name="TerminalInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminalInput"></a>

```go
func TerminalInput() *f64
```

- *Type:* *f64

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeInput"></a>

```go
func TimeInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `Terminal`<sup>Required</sup> <a name="Terminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminal"></a>

```go
func Terminal() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.time"></a>

```go
func Time() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedPreciseProtectionRuleV1Action <a name="WafDedicatedPreciseProtectionRuleV1Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

&wafdedicatedpreciseprotectionrulev1.WafDedicatedPreciseProtectionRuleV1Action {
	Category: *string,
	FollowedActionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.followedActionId">FollowedActionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#followed_action_id WafDedicatedPreciseProtectionRuleV1#followed_action_id}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}.

---

##### `FollowedActionId`<sup>Optional</sup> <a name="FollowedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.followedActionId"></a>

```go
FollowedActionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#followed_action_id WafDedicatedPreciseProtectionRuleV1#followed_action_id}.

---

### WafDedicatedPreciseProtectionRuleV1Conditions <a name="WafDedicatedPreciseProtectionRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

&wafdedicatedpreciseprotectionrulev1.WafDedicatedPreciseProtectionRuleV1Conditions {
	Category: *string,
	Contents: *[]*string,
	Index: *string,
	LogicOperation: *string,
	ValueListId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.contents">Contents</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#contents WafDedicatedPreciseProtectionRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.index">Index</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#index WafDedicatedPreciseProtectionRuleV1#index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.logicOperation">LogicOperation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#logic_operation WafDedicatedPreciseProtectionRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.valueListId">ValueListId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#value_list_id WafDedicatedPreciseProtectionRuleV1#value_list_id}. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}.

---

##### `Contents`<sup>Optional</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.contents"></a>

```go
Contents *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#contents WafDedicatedPreciseProtectionRuleV1#contents}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.index"></a>

```go
Index *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#index WafDedicatedPreciseProtectionRuleV1#index}.

---

##### `LogicOperation`<sup>Optional</sup> <a name="LogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.logicOperation"></a>

```go
LogicOperation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#logic_operation WafDedicatedPreciseProtectionRuleV1#logic_operation}.

---

##### `ValueListId`<sup>Optional</sup> <a name="ValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.valueListId"></a>

```go
ValueListId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#value_list_id WafDedicatedPreciseProtectionRuleV1#value_list_id}.

---

### WafDedicatedPreciseProtectionRuleV1Config <a name="WafDedicatedPreciseProtectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

&wafdedicatedpreciseprotectionrulev1.WafDedicatedPreciseProtectionRuleV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: interface{},
	PolicyId: *string,
	Priority: *f64,
	Time: interface{},
	Conditions: interface{},
	Description: *string,
	Id: *string,
	Start: *f64,
	Terminal: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.time">Time</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.start">Start</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.terminal">Terminal</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#action WafDedicatedPreciseProtectionRuleV1#action}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.time"></a>

```go
Time interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#conditions WafDedicatedPreciseProtectionRuleV1#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.start"></a>

```go
Start *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}.

---

##### `Terminal`<sup>Optional</sup> <a name="Terminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.terminal"></a>

```go
Terminal *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.timeouts"></a>

```go
Timeouts WafDedicatedPreciseProtectionRuleV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#timeouts WafDedicatedPreciseProtectionRuleV1#timeouts}

---

### WafDedicatedPreciseProtectionRuleV1Timeouts <a name="WafDedicatedPreciseProtectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

&wafdedicatedpreciseprotectionrulev1.WafDedicatedPreciseProtectionRuleV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#create WafDedicatedPreciseProtectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#delete WafDedicatedPreciseProtectionRuleV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#create WafDedicatedPreciseProtectionRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_dedicated_precise_protection_rule_v1#delete WafDedicatedPreciseProtectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedPreciseProtectionRuleV1ActionList <a name="WafDedicatedPreciseProtectionRuleV1ActionList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.NewWafDedicatedPreciseProtectionRuleV1ActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafDedicatedPreciseProtectionRuleV1ActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get"></a>

```go
func Get(index *f64) WafDedicatedPreciseProtectionRuleV1ActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedPreciseProtectionRuleV1ActionOutputReference <a name="WafDedicatedPreciseProtectionRuleV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.NewWafDedicatedPreciseProtectionRuleV1ActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafDedicatedPreciseProtectionRuleV1ActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resetFollowedActionId">ResetFollowedActionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFollowedActionId` <a name="ResetFollowedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resetFollowedActionId"></a>

```go
func ResetFollowedActionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionIdInput">FollowedActionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionId">FollowedActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `FollowedActionIdInput`<sup>Optional</sup> <a name="FollowedActionIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionIdInput"></a>

```go
func FollowedActionIdInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `FollowedActionId`<sup>Required</sup> <a name="FollowedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionId"></a>

```go
func FollowedActionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedPreciseProtectionRuleV1ConditionsList <a name="WafDedicatedPreciseProtectionRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.NewWafDedicatedPreciseProtectionRuleV1ConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafDedicatedPreciseProtectionRuleV1ConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get"></a>

```go
func Get(index *f64) WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference <a name="WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.NewWafDedicatedPreciseProtectionRuleV1ConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetContents">ResetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetIndex">ResetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetLogicOperation">ResetLogicOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetValueListId">ResetValueListId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetContents` <a name="ResetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetContents"></a>

```go
func ResetContents()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetIndex"></a>

```go
func ResetIndex()
```

##### `ResetLogicOperation` <a name="ResetLogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetLogicOperation"></a>

```go
func ResetLogicOperation()
```

##### `ResetValueListId` <a name="ResetValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetValueListId"></a>

```go
func ResetValueListId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperationInput">LogicOperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListIdInput">ValueListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contents">Contents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperation">LogicOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListId">ValueListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contentsInput"></a>

```go
func ContentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `LogicOperationInput`<sup>Optional</sup> <a name="LogicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```go
func LogicOperationInput() *string
```

- *Type:* *string

---

##### `ValueListIdInput`<sup>Optional</sup> <a name="ValueListIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListIdInput"></a>

```go
func ValueListIdInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contents"></a>

```go
func Contents() *[]*string
```

- *Type:* *[]*string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `LogicOperation`<sup>Required</sup> <a name="LogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperation"></a>

```go
func LogicOperation() *string
```

- *Type:* *string

---

##### `ValueListId`<sup>Required</sup> <a name="ValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListId"></a>

```go
func ValueListId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference <a name="WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v10/wafdedicatedpreciseprotectionrulev1"

wafdedicatedpreciseprotectionrulev1.NewWafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



