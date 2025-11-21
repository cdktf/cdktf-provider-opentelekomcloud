# `geminiInstanceV3` Submodule <a name="`geminiInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiInstanceV3 <a name="GeminiInstanceV3" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3 opentelekomcloud_gemini_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.NewGeminiInstanceV3(scope Construct, id *string, config GeminiInstanceV3Config) GeminiInstanceV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config">GeminiInstanceV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config">GeminiInstanceV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putBackupStrategy">PutBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putDatastore">PutDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetBackupStrategy">ResetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetNodeNum">ResetNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupStrategy` <a name="PutBackupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putBackupStrategy"></a>

```go
func PutBackupStrategy(value GeminiInstanceV3BackupStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a>

---

##### `PutDatastore` <a name="PutDatastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putDatastore"></a>

```go
func PutDatastore(value GeminiInstanceV3Datastore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putTimeouts"></a>

```go
func PutTimeouts(value GeminiInstanceV3Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a>

---

##### `ResetBackupStrategy` <a name="ResetBackupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetBackupStrategy"></a>

```go
func ResetBackupStrategy()
```

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetConfigurationId"></a>

```go
func ResetConfigurationId()
```

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetDatastore"></a>

```go
func ResetDatastore()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetId"></a>

```go
func ResetId()
```

##### `ResetNodeNum` <a name="ResetNodeNum" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetNodeNum"></a>

```go
func ResetNodeNum()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetSecurityGroupId"></a>

```go
func ResetSecurityGroupId()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.GeminiInstanceV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.GeminiInstanceV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.GeminiInstanceV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.GeminiInstanceV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GeminiInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiInstanceV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GeminiInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.backupStrategy">BackupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference">GeminiInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference">GeminiInstanceV3DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.dbUserName">DbUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList">GeminiInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.privateIps">PrivateIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference">GeminiInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.backupStrategyInput">BackupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.datastoreInput">DatastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.flavorInput">FlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodeNumInput">NodeNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.sslInput">SslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.flavor">Flavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodeNum">NodeNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.ssl">Ssl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupStrategy`<sup>Required</sup> <a name="BackupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.backupStrategy"></a>

```go
func BackupStrategy() GeminiInstanceV3BackupStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference">GeminiInstanceV3BackupStrategyOutputReference</a>

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.datastore"></a>

```go
func Datastore() GeminiInstanceV3DatastoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference">GeminiInstanceV3DatastoreOutputReference</a>

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.dbUserName"></a>

```go
func DbUserName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodes"></a>

```go
func Nodes() GeminiInstanceV3NodesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList">GeminiInstanceV3NodesList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivateIps`<sup>Required</sup> <a name="PrivateIps" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.privateIps"></a>

```go
func PrivateIps() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.timeouts"></a>

```go
func Timeouts() GeminiInstanceV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference">GeminiInstanceV3TimeoutsOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BackupStrategyInput`<sup>Optional</sup> <a name="BackupStrategyInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.backupStrategyInput"></a>

```go
func BackupStrategyInput() GeminiInstanceV3BackupStrategy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a>

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.configurationIdInput"></a>

```go
func ConfigurationIdInput() *string
```

- *Type:* *string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.datastoreInput"></a>

```go
func DatastoreInput() GeminiInstanceV3Datastore
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a>

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.flavorInput"></a>

```go
func FlavorInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeNumInput`<sup>Optional</sup> <a name="NodeNumInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodeNumInput"></a>

```go
func NodeNumInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.sslInput"></a>

```go
func SslInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.configurationId"></a>

```go
func ConfigurationId() *string
```

- *Type:* *string

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.flavor"></a>

```go
func Flavor() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodeNum"></a>

```go
func NodeNum() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.ssl"></a>

```go
func Ssl() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiInstanceV3BackupStrategy <a name="GeminiInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

&geminiinstancev3.GeminiInstanceV3BackupStrategy {
	StartTime: *string,
	KeepDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#start_time GeminiInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.property.keepDays">KeepDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#keep_days GeminiInstanceV3#keep_days}. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#start_time GeminiInstanceV3#start_time}.

---

##### `KeepDays`<sup>Optional</sup> <a name="KeepDays" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.property.keepDays"></a>

```go
KeepDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#keep_days GeminiInstanceV3#keep_days}.

---

### GeminiInstanceV3Config <a name="GeminiInstanceV3Config" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

&geminiinstancev3.GeminiInstanceV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZone: *string,
	Flavor: *string,
	Name: *string,
	Password: *string,
	SubnetId: *string,
	VolumeSize: *f64,
	VpcId: *string,
	BackupStrategy: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.geminiInstanceV3.GeminiInstanceV3BackupStrategy,
	ConfigurationId: *string,
	Datastore: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.geminiInstanceV3.GeminiInstanceV3Datastore,
	Id: *string,
	NodeNum: *f64,
	Period: *f64,
	SecurityGroupId: *string,
	Ssl: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.geminiInstanceV3.GeminiInstanceV3Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#availability_zone GeminiInstanceV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.flavor">Flavor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#flavor GeminiInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#name GeminiInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#password GeminiInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#subnet_id GeminiInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#volume_size GeminiInstanceV3#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#vpc_id GeminiInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.backupStrategy">BackupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#configuration_id GeminiInstanceV3#configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#id GeminiInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.nodeNum">NodeNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#node_num GeminiInstanceV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.period">Period</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#period GeminiInstanceV3#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#security_group_id GeminiInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.ssl">Ssl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#ssl GeminiInstanceV3#ssl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#tags GeminiInstanceV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#availability_zone GeminiInstanceV3#availability_zone}.

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.flavor"></a>

```go
Flavor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#flavor GeminiInstanceV3#flavor}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#name GeminiInstanceV3#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#password GeminiInstanceV3#password}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#subnet_id GeminiInstanceV3#subnet_id}.

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#volume_size GeminiInstanceV3#volume_size}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#vpc_id GeminiInstanceV3#vpc_id}.

---

##### `BackupStrategy`<sup>Optional</sup> <a name="BackupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.backupStrategy"></a>

```go
BackupStrategy GeminiInstanceV3BackupStrategy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#backup_strategy GeminiInstanceV3#backup_strategy}

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.configurationId"></a>

```go
ConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#configuration_id GeminiInstanceV3#configuration_id}.

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.datastore"></a>

```go
Datastore GeminiInstanceV3Datastore
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#datastore GeminiInstanceV3#datastore}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#id GeminiInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeNum`<sup>Optional</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.nodeNum"></a>

```go
NodeNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#node_num GeminiInstanceV3#node_num}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#period GeminiInstanceV3#period}.

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#security_group_id GeminiInstanceV3#security_group_id}.

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.ssl"></a>

```go
Ssl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#ssl GeminiInstanceV3#ssl}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#tags GeminiInstanceV3#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.timeouts"></a>

```go
Timeouts GeminiInstanceV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#timeouts GeminiInstanceV3#timeouts}

---

### GeminiInstanceV3Datastore <a name="GeminiInstanceV3Datastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

&geminiinstancev3.GeminiInstanceV3Datastore {
	Engine: *string,
	StorageEngine: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#engine GeminiInstanceV3#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.storageEngine">StorageEngine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#storage_engine GeminiInstanceV3#storage_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#version GeminiInstanceV3#version}. |

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#engine GeminiInstanceV3#engine}.

---

##### `StorageEngine`<sup>Required</sup> <a name="StorageEngine" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.storageEngine"></a>

```go
StorageEngine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#storage_engine GeminiInstanceV3#storage_engine}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#version GeminiInstanceV3#version}.

---

### GeminiInstanceV3Nodes <a name="GeminiInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Nodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

&geminiinstancev3.GeminiInstanceV3Nodes {

}
```


### GeminiInstanceV3Timeouts <a name="GeminiInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

&geminiinstancev3.GeminiInstanceV3Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#create GeminiInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#delete GeminiInstanceV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#update GeminiInstanceV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#create GeminiInstanceV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#delete GeminiInstanceV3#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/gemini_instance_v3#update GeminiInstanceV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiInstanceV3BackupStrategyOutputReference <a name="GeminiInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.NewGeminiInstanceV3BackupStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiInstanceV3BackupStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resetKeepDays">ResetKeepDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeepDays` <a name="ResetKeepDays" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```go
func ResetKeepDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.keepDaysInput">KeepDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.keepDays">KeepDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeepDaysInput`<sup>Optional</sup> <a name="KeepDaysInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```go
func KeepDaysInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `KeepDays`<sup>Required</sup> <a name="KeepDays" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```go
func KeepDays() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiInstanceV3BackupStrategy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a>

---


### GeminiInstanceV3DatastoreOutputReference <a name="GeminiInstanceV3DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.NewGeminiInstanceV3DatastoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiInstanceV3DatastoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.storageEngineInput">StorageEngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.storageEngine">StorageEngine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `StorageEngineInput`<sup>Optional</sup> <a name="StorageEngineInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.storageEngineInput"></a>

```go
func StorageEngineInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `StorageEngine`<sup>Required</sup> <a name="StorageEngine" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.storageEngine"></a>

```go
func StorageEngine() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiInstanceV3Datastore
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a>

---


### GeminiInstanceV3NodesList <a name="GeminiInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.NewGeminiInstanceV3NodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiInstanceV3NodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.get"></a>

```go
func Get(index *f64) GeminiInstanceV3NodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GeminiInstanceV3NodesOutputReference <a name="GeminiInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.NewGeminiInstanceV3NodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiInstanceV3NodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.supportReduce">SupportReduce</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Nodes">GeminiInstanceV3Nodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SupportReduce`<sup>Required</sup> <a name="SupportReduce" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.supportReduce"></a>

```go
func SupportReduce() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiInstanceV3Nodes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Nodes">GeminiInstanceV3Nodes</a>

---


### GeminiInstanceV3TimeoutsOutputReference <a name="GeminiInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/geminiinstancev3"

geminiinstancev3.NewGeminiInstanceV3TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiInstanceV3TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



