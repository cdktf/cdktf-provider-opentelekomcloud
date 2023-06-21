# `opentelekomcloud_logtank_transfer_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_logtank_transfer_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2).

# `logtankTransferV2` Submodule <a name="`logtankTransferV2` Submodule" id="@cdktf/provider-opentelekomcloud.logtankTransferV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogtankTransferV2 <a name="LogtankTransferV2" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2 opentelekomcloud_logtank_transfer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v8/logtanktransferv2"

logtanktransferv2.NewLogtankTransferV2(scope Construct, id *string, config LogtankTransferV2Config) LogtankTransferV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config">LogtankTransferV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config">LogtankTransferV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetDirPrefixName">ResetDirPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetPrefixName">ResetPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetSwitchOn">ResetSwitchOn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirPrefixName` <a name="ResetDirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetDirPrefixName"></a>

```go
func ResetDirPrefixName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetId"></a>

```go
func ResetId()
```

##### `ResetPrefixName` <a name="ResetPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetPrefixName"></a>

```go
func ResetPrefixName()
```

##### `ResetSwitchOn` <a name="ResetSwitchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetSwitchOn"></a>

```go
func ResetSwitchOn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v8/logtanktransferv2"

logtanktransferv2.LogtankTransferV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v8/logtanktransferv2"

logtanktransferv2.LogtankTransferV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v8/logtanktransferv2"

logtanktransferv2.LogtankTransferV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.createTime">CreateTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferMode">LogTransferMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferType">LogTransferType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionEnable">ObsEncryptionEnable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionId">ObsEncryptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixNameInput">DirPrefixNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIdsInput">LogStreamIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketNameInput">ObsBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnitInput">PeriodUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixNameInput">PrefixNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormatInput">StorageFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOnInput">SwitchOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixName">DirPrefixName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIds">LogStreamIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketName">ObsBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnit">PeriodUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixName">PrefixName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormat">StorageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOn">SwitchOn</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.createTime"></a>

```go
func CreateTime() *f64
```

- *Type:* *f64

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogTransferMode`<sup>Required</sup> <a name="LogTransferMode" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferMode"></a>

```go
func LogTransferMode() *string
```

- *Type:* *string

---

##### `LogTransferType`<sup>Required</sup> <a name="LogTransferType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferType"></a>

```go
func LogTransferType() *string
```

- *Type:* *string

---

##### `ObsEncryptionEnable`<sup>Required</sup> <a name="ObsEncryptionEnable" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionEnable"></a>

```go
func ObsEncryptionEnable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ObsEncryptionId`<sup>Required</sup> <a name="ObsEncryptionId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionId"></a>

```go
func ObsEncryptionId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `DirPrefixNameInput`<sup>Optional</sup> <a name="DirPrefixNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixNameInput"></a>

```go
func DirPrefixNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupIdInput"></a>

```go
func LogGroupIdInput() *string
```

- *Type:* *string

---

##### `LogStreamIdsInput`<sup>Optional</sup> <a name="LogStreamIdsInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIdsInput"></a>

```go
func LogStreamIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ObsBucketNameInput`<sup>Optional</sup> <a name="ObsBucketNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketNameInput"></a>

```go
func ObsBucketNameInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `PeriodUnitInput`<sup>Optional</sup> <a name="PeriodUnitInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnitInput"></a>

```go
func PeriodUnitInput() *string
```

- *Type:* *string

---

##### `PrefixNameInput`<sup>Optional</sup> <a name="PrefixNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixNameInput"></a>

```go
func PrefixNameInput() *string
```

- *Type:* *string

---

##### `StorageFormatInput`<sup>Optional</sup> <a name="StorageFormatInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormatInput"></a>

```go
func StorageFormatInput() *string
```

- *Type:* *string

---

##### `SwitchOnInput`<sup>Optional</sup> <a name="SwitchOnInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOnInput"></a>

```go
func SwitchOnInput() interface{}
```

- *Type:* interface{}

---

##### `DirPrefixName`<sup>Required</sup> <a name="DirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixName"></a>

```go
func DirPrefixName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogStreamIds`<sup>Required</sup> <a name="LogStreamIds" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIds"></a>

```go
func LogStreamIds() *[]*string
```

- *Type:* *[]*string

---

##### `ObsBucketName`<sup>Required</sup> <a name="ObsBucketName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketName"></a>

```go
func ObsBucketName() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `PeriodUnit`<sup>Required</sup> <a name="PeriodUnit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnit"></a>

```go
func PeriodUnit() *string
```

- *Type:* *string

---

##### `PrefixName`<sup>Required</sup> <a name="PrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixName"></a>

```go
func PrefixName() *string
```

- *Type:* *string

---

##### `StorageFormat`<sup>Required</sup> <a name="StorageFormat" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormat"></a>

```go
func StorageFormat() *string
```

- *Type:* *string

---

##### `SwitchOn`<sup>Required</sup> <a name="SwitchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOn"></a>

```go
func SwitchOn() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogtankTransferV2Config <a name="LogtankTransferV2Config" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v8/logtanktransferv2"

&logtanktransferv2.LogtankTransferV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LogGroupId: *string,
	LogStreamIds: *[]*string,
	ObsBucketName: *string,
	Period: *f64,
	PeriodUnit: *string,
	StorageFormat: *string,
	DirPrefixName: *string,
	Id: *string,
	PrefixName: *string,
	SwitchOn: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logStreamIds">LogStreamIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.obsBucketName">ObsBucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.period">Period</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.periodUnit">PeriodUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.storageFormat">StorageFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dirPrefixName">DirPrefixName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.prefixName">PrefixName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.switchOn">SwitchOn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logGroupId"></a>

```go
LogGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}.

---

##### `LogStreamIds`<sup>Required</sup> <a name="LogStreamIds" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logStreamIds"></a>

```go
LogStreamIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}.

---

##### `ObsBucketName`<sup>Required</sup> <a name="ObsBucketName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.obsBucketName"></a>

```go
ObsBucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}.

---

##### `PeriodUnit`<sup>Required</sup> <a name="PeriodUnit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.periodUnit"></a>

```go
PeriodUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}.

---

##### `StorageFormat`<sup>Required</sup> <a name="StorageFormat" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.storageFormat"></a>

```go
StorageFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}.

---

##### `DirPrefixName`<sup>Optional</sup> <a name="DirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dirPrefixName"></a>

```go
DirPrefixName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrefixName`<sup>Optional</sup> <a name="PrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.prefixName"></a>

```go
PrefixName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}.

---

##### `SwitchOn`<sup>Optional</sup> <a name="SwitchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.switchOn"></a>

```go
SwitchOn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}.

---


