# `wafCcattackprotectionRuleV1` Submodule <a name="`wafCcattackprotectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafCcattackprotectionRuleV1 <a name="WafCcattackprotectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1 opentelekomcloud_waf_ccattackprotection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/wafccattackprotectionrulev1"

wafccattackprotectionrulev1.NewWafCcattackprotectionRuleV1(scope Construct, id *string, config WafCcattackprotectionRuleV1Config) WafCcattackprotectionRuleV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config">WafCcattackprotectionRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config">WafCcattackprotectionRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContent">ResetBlockContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContentType">ResetBlockContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetLockTime">ResetLockTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagCategory">ResetTagCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagContents">ResetTagContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagIndex">ResetTagIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts"></a>

```go
func PutTimeouts(value WafCcattackprotectionRuleV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>

---

##### `ResetBlockContent` <a name="ResetBlockContent" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContent"></a>

```go
func ResetBlockContent()
```

##### `ResetBlockContentType` <a name="ResetBlockContentType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContentType"></a>

```go
func ResetBlockContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetId"></a>

```go
func ResetId()
```

##### `ResetLockTime` <a name="ResetLockTime" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetLockTime"></a>

```go
func ResetLockTime()
```

##### `ResetTagCategory` <a name="ResetTagCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagCategory"></a>

```go
func ResetTagCategory()
```

##### `ResetTagContents` <a name="ResetTagContents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagContents"></a>

```go
func ResetTagContents()
```

##### `ResetTagIndex` <a name="ResetTagIndex" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagIndex"></a>

```go
func ResetTagIndex()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafCcattackprotectionRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/wafccattackprotectionrulev1"

wafccattackprotectionrulev1.WafCcattackprotectionRuleV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/wafccattackprotectionrulev1"

wafccattackprotectionrulev1.WafCcattackprotectionRuleV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/wafccattackprotectionrulev1"

wafccattackprotectionrulev1.WafCcattackprotectionRuleV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/wafccattackprotectionrulev1"

wafccattackprotectionrulev1.WafCcattackprotectionRuleV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WafCcattackprotectionRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WafCcattackprotectionRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WafCcattackprotectionRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WafCcattackprotectionRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference">WafCcattackprotectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategoryInput">ActionCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentInput">BlockContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentTypeInput">BlockContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNumInput">LimitNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriodInput">LimitPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTimeInput">LockTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategoryInput">TagCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContentsInput">TagContentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndexInput">TagIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagTypeInput">TagTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategory">ActionCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContent">BlockContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentType">BlockContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNum">LimitNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriod">LimitPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTime">LockTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategory">TagCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContents">TagContents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndex">TagIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagType">TagType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeouts"></a>

```go
func Timeouts() WafCcattackprotectionRuleV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference">WafCcattackprotectionRuleV1TimeoutsOutputReference</a>

---

##### `ActionCategoryInput`<sup>Optional</sup> <a name="ActionCategoryInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategoryInput"></a>

```go
func ActionCategoryInput() *string
```

- *Type:* *string

---

##### `BlockContentInput`<sup>Optional</sup> <a name="BlockContentInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentInput"></a>

```go
func BlockContentInput() *string
```

- *Type:* *string

---

##### `BlockContentTypeInput`<sup>Optional</sup> <a name="BlockContentTypeInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentTypeInput"></a>

```go
func BlockContentTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitNumInput`<sup>Optional</sup> <a name="LimitNumInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNumInput"></a>

```go
func LimitNumInput() *f64
```

- *Type:* *f64

---

##### `LimitPeriodInput`<sup>Optional</sup> <a name="LimitPeriodInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriodInput"></a>

```go
func LimitPeriodInput() *f64
```

- *Type:* *f64

---

##### `LockTimeInput`<sup>Optional</sup> <a name="LockTimeInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTimeInput"></a>

```go
func LockTimeInput() *f64
```

- *Type:* *f64

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `TagCategoryInput`<sup>Optional</sup> <a name="TagCategoryInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategoryInput"></a>

```go
func TagCategoryInput() *string
```

- *Type:* *string

---

##### `TagContentsInput`<sup>Optional</sup> <a name="TagContentsInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContentsInput"></a>

```go
func TagContentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagIndexInput`<sup>Optional</sup> <a name="TagIndexInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndexInput"></a>

```go
func TagIndexInput() *string
```

- *Type:* *string

---

##### `TagTypeInput`<sup>Optional</sup> <a name="TagTypeInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagTypeInput"></a>

```go
func TagTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ActionCategory`<sup>Required</sup> <a name="ActionCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategory"></a>

```go
func ActionCategory() *string
```

- *Type:* *string

---

##### `BlockContent`<sup>Required</sup> <a name="BlockContent" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContent"></a>

```go
func BlockContent() *string
```

- *Type:* *string

---

##### `BlockContentType`<sup>Required</sup> <a name="BlockContentType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentType"></a>

```go
func BlockContentType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LimitNum`<sup>Required</sup> <a name="LimitNum" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNum"></a>

```go
func LimitNum() *f64
```

- *Type:* *f64

---

##### `LimitPeriod`<sup>Required</sup> <a name="LimitPeriod" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriod"></a>

```go
func LimitPeriod() *f64
```

- *Type:* *f64

---

##### `LockTime`<sup>Required</sup> <a name="LockTime" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTime"></a>

```go
func LockTime() *f64
```

- *Type:* *f64

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `TagCategory`<sup>Required</sup> <a name="TagCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategory"></a>

```go
func TagCategory() *string
```

- *Type:* *string

---

##### `TagContents`<sup>Required</sup> <a name="TagContents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContents"></a>

```go
func TagContents() *[]*string
```

- *Type:* *[]*string

---

##### `TagIndex`<sup>Required</sup> <a name="TagIndex" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndex"></a>

```go
func TagIndex() *string
```

- *Type:* *string

---

##### `TagType`<sup>Required</sup> <a name="TagType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagType"></a>

```go
func TagType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafCcattackprotectionRuleV1Config <a name="WafCcattackprotectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/wafccattackprotectionrulev1"

&wafccattackprotectionrulev1.WafCcattackprotectionRuleV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActionCategory: *string,
	LimitNum: *f64,
	LimitPeriod: *f64,
	PolicyId: *string,
	TagType: *string,
	Url: *string,
	BlockContent: *string,
	BlockContentType: *string,
	Id: *string,
	LockTime: *f64,
	TagCategory: *string,
	TagContents: *[]*string,
	TagIndex: *string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.actionCategory">ActionCategory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitNum">LimitNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitPeriod">LimitPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagType">TagType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContent">BlockContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContentType">BlockContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lockTime">LockTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagCategory">TagCategory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagContents">TagContents</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagIndex">TagIndex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionCategory`<sup>Required</sup> <a name="ActionCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.actionCategory"></a>

```go
ActionCategory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}.

---

##### `LimitNum`<sup>Required</sup> <a name="LimitNum" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitNum"></a>

```go
LimitNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}.

---

##### `LimitPeriod`<sup>Required</sup> <a name="LimitPeriod" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitPeriod"></a>

```go
LimitPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}.

---

##### `TagType`<sup>Required</sup> <a name="TagType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagType"></a>

```go
TagType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}.

---

##### `BlockContent`<sup>Optional</sup> <a name="BlockContent" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContent"></a>

```go
BlockContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}.

---

##### `BlockContentType`<sup>Optional</sup> <a name="BlockContentType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContentType"></a>

```go
BlockContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LockTime`<sup>Optional</sup> <a name="LockTime" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lockTime"></a>

```go
LockTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}.

---

##### `TagCategory`<sup>Optional</sup> <a name="TagCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagCategory"></a>

```go
TagCategory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}.

---

##### `TagContents`<sup>Optional</sup> <a name="TagContents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagContents"></a>

```go
TagContents *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}.

---

##### `TagIndex`<sup>Optional</sup> <a name="TagIndex" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagIndex"></a>

```go
TagIndex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.timeouts"></a>

```go
Timeouts WafCcattackprotectionRuleV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#timeouts WafCcattackprotectionRuleV1#timeouts}

---

### WafCcattackprotectionRuleV1Timeouts <a name="WafCcattackprotectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/wafccattackprotectionrulev1"

&wafccattackprotectionrulev1.WafCcattackprotectionRuleV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#create WafCcattackprotectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#delete WafCcattackprotectionRuleV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#create WafCcattackprotectionRuleV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/waf_ccattackprotection_rule_v1#delete WafCcattackprotectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafCcattackprotectionRuleV1TimeoutsOutputReference <a name="WafCcattackprotectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/wafccattackprotectionrulev1"

wafccattackprotectionrulev1.NewWafCcattackprotectionRuleV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafCcattackprotectionRuleV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



